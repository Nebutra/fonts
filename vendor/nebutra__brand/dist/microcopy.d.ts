/**
 * @nebutra/brand — Microcopy SSOT
 *
 * Typed projection of the Nebutra Microcopy System methodology bible
 * (docs/microcopy/nebutra-microcopy-system.md).
 *
 * This module is the machine-readable SSOT for §8.2 (NebutraMicrocopy type),
 * §8.3 (Milestone Copy Pack, 14 entries), and §6.7 (Easter Egg Registry).
 *
 * IMPORTANT: Do NOT hand-edit copy strings here without re-reading the bible.
 * The §8.3 table is the authority. Run `pnpm --filter @nebutra/brand test` to
 * verify invariants after any change.
 *
 * MC-H2: `act` carries only the three-act model ('starting'|'building'|'growing').
 * Failure & Milestone are cross-cutting throughlines, not a 4th act; they are
 * modelled with the optional `throughline` field. 'First Reset' has act:'starting'
 * (it can occur at any phase) + throughline:'failure'.
 *
 * MC-H4: locale is resolved via locale-keyed maps (MILESTONE_COPY_PACK entries
 * carry a `copy` record keyed by locale, not one row per (id, locale)).
 */
type SupportedLocale = "zh-CN" | "en-US";
/**
 * Structured microcopy asset as defined in §8.2 of the microcopy system bible.
 *
 * MC-H2 fix: `act` is the three-act model (starting/building/growing).
 * Failure and Milestone are cross-cutting states modelled via `throughline`.
 * MC-H3: all §8.2 fields are present including id, locale, secondaryCopy?,
 * ctaCopy?, and surface includes 'graduation'.
 */
type NebutraMicrocopy = {
    id: string;
    locale: SupportedLocale | string;
    /** Three-act model (user-visible). Failure/Milestone use `throughline`. */
    act: "starting" | "building" | "growing";
    /**
     * Cross-cutting states that span all acts (§4.4 纵贯线).
     * Failure and Milestone are not acts; they appear at any act.
     */
    throughline?: "failure" | "milestone";
    /** Nine-stage production taxonomy (§4.3). */
    stage: "imagining" | "validating" | "assembling" | "building" | "shipping" | "operating" | "growing" | "scaling" | "graduating";
    /** Product surface where the copy appears. MC-H3: includes 'graduation'. */
    surface: "onboarding" | "empty_state" | "success_state" | "failure_state" | "milestone" | "team" | "revenue" | "growth" | "deployment" | "graduation" | "tool_recommendation" | "warning";
    /** Five voice registers (§2.4). */
    voiceRegister: "companion" | "mentor" | "historian" | "operator" | "graduation";
    /** User's emotional state at this moment. */
    userEmotion: "uncertain" | "excited" | "stuck" | "proud" | "anxious" | "focused" | "ready";
    /** Seven cultural motifs (§3.2). */
    culturalMotif: "small_room" | "first_believer" | "the_table" | "survival_first" | "ship_it" | "honest_restart" | "new_garage";
    /** Three-layer easter egg classification (§6.1). */
    easterEggLayer: "functional" | "metaphor" | "echo";
    primaryCopy: string;
    secondaryCopy?: string;
    ctaCopy?: string;
    variables?: Array<"{company}" | "{project}" | "{tool}" | "{member}" | "{user_count}" | "{revenue}" | "{stage}">;
    riskLevel: "low" | "medium" | "high";
    /**
     * Echo-layer REQUIRED (§8.2): the real-world story / cultural inspiration
     * behind the second layer. Must be non-empty for any entry with
     * easterEggLayer === 'echo'.
     */
    sourceInspiration?: string;
    notes?: string;
};
type MilestoneId = "first_room" | "first_folder" | "first_table" | "first_signal" | "first_ship" | "first_believer" | "first_revenue" | "first_return" | "first_team" | "first_crowd" | "first_reset" | "first_public" | "first_demo" | "graduation";
/**
 * A single Milestone Copy Pack entry keyed by locale.
 *
 * MC-H4: bilingual copy is stored as a locale-keyed map so a single entry
 * covers both zh-CN and en-US without duplicating the metadata fields.
 * getMilestoneCopy(id, locale) slices out the requested locale.
 */
type MilestoneCopyEntry = {
    id: MilestoneId;
    /** Locale-keyed copy strings. Each locale has primary, optional secondary/cta. */
    copy: Readonly<Record<SupportedLocale, {
        primary: string;
        secondary?: string;
        cta?: string;
    }>>;
    /** Three-act model; 'first_reset' is 'starting' + throughline:'failure'. */
    act: "starting" | "building" | "growing";
    throughline?: "failure" | "milestone";
    stage: NebutraMicrocopy["stage"];
    surface: NebutraMicrocopy["surface"];
    voiceRegister: NebutraMicrocopy["voiceRegister"];
    culturalMotif: NebutraMicrocopy["culturalMotif"];
    easterEggLayer: NebutraMicrocopy["easterEggLayer"];
    riskLevel: NebutraMicrocopy["riskLevel"];
    sourceInspiration?: string;
};
/**
 * The 14-entry Milestone Copy Pack, typed bilingual data directly from §8.3.
 *
 * These are the canonical typed objects; the i18n catalog
 * (packages/platform/i18n/locales/{en,zh}.json under startupOs.milestone.*)
 * mirrors these strings for runtime next-intl delivery.
 *
 * "First Reset" has act:'starting' because a pivot can occur at any stage in
 * the first act — not '纵贯' (which is not a valid act value).
 */
declare const MILESTONE_COPY_PACK: readonly MilestoneCopyEntry[];
/**
 * Returns the copy strings for a given milestone and locale.
 *
 * @param id - The MilestoneId to look up (e.g. 'first_folder')
 * @param locale - The locale to retrieve ('zh-CN' or 'en-US')
 * @returns Object with primary string, optional secondary and cta.
 *
 * @example
 * getMilestoneCopy("first_folder", "zh-CN").primary
 * // => "许多公司，最初只是一个文件夹。"
 */
declare function getMilestoneCopy(id: MilestoneId, locale: SupportedLocale): {
    primary: string;
    secondary?: string;
    cta?: string;
};
/**
 * Easter Egg Registry entry. Per §6.7 and MC-M1, only echo-layer彩蛋 are
 * registered here — functional and metaphor layers do not require防油/防侵权
 * tracking. Echo-layer entries MUST have a non-empty secondaryCopy and
 * sourceInspiration (the "second layer" cultural anchor).
 */
type EasterEggEntry = {
    id: string;
    /** MC-M1: only 'echo' entries go in the registry. */
    layer: "echo";
    primaryCopy: string;
    /** Required for echo-layer: the second layer (同行 visible). */
    secondaryCopy: string;
    /**
     * Required for echo-layer (§8.2 "回响层必填"): the real-world story /
     * cultural inspiration that anchors the second layer.
     * Used by防重防油 check: same sourceInspiration must not appear in
     * adjacent surfaces.
     */
    sourceInspiration: string;
    usedInSurface: NebutraMicrocopy["surface"];
    riskLevel: "low" | "medium" | "high";
};
/**
 * Registry of echo-layer easter eggs as typed data (§6.7).
 * Seeded with the four canonical §6.3 examples.
 *
 * Add new echo-layer entries here when writing new回响层彩蛋.
 * Each entry's sourceInspiration must be unique within the registry (防重).
 */
declare const EASTER_EGG_REGISTRY: readonly EasterEggEntry[];

export { EASTER_EGG_REGISTRY, type EasterEggEntry, MILESTONE_COPY_PACK, type MilestoneCopyEntry, type MilestoneId, type NebutraMicrocopy, type SupportedLocale, getMilestoneCopy };
