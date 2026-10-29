// src/easter-egg-registry.json
var easter_egg_registry_default = [
  {
    id: "echo-localhost",
    layer: "echo",
    primaryCopy: "\u5B83\u7EC8\u4E8E\u79BB\u5F00\u4E86 localhost\u3002",
    secondaryCopy: "It finally left localhost.",
    sourceInspiration: "\u5F00\u53D1\u8005\u7B2C\u4E00\u6B21\u628A\u670D\u52A1\u8DD1\u51FA\u672C\u5730\u673A\u5668\u7684\u90A3\u4E00\u523B \u2014 the moment a service escapes the developer's own machine",
    usedInSurface: "deployment",
    riskLevel: "low"
  },
  {
    id: "echo-general-magic",
    layer: "echo",
    primaryCopy: "\u6709\u4E9B\u9879\u76EE\u4E0D\u662F\u5931\u8D25\uFF0C\u662F\u628A\u56E2\u961F\u7EC3\u51FA\u6765\u4E86\u3002",
    secondaryCopy: "Some projects don't fail. They train the team that comes next.",
    sourceInspiration: "General Magic \u2014 \u4F1F\u5927\u7684\u5931\u8D25\u5B55\u80B2\u4E86\u6539\u53D8\u4E16\u754C\u7684\u4E00\u4EE3\u5DE5\u7A0B\u5E08 (the project failed but its alumni built the next era)",
    usedInSurface: "failure_state",
    riskLevel: "low"
  },
  {
    id: "echo-ramen",
    layer: "echo",
    primaryCopy: "\u5148\u6D3B\u4E0B\u6765\uFF0C\u4E0D\u4E22\u4EBA\u3002",
    secondaryCopy: "Staying alive is not shameful. Ramen counts.",
    sourceInspiration: "ramen profitability \u2014 Paul Graham \u63D0\u51FA\u7684\u751F\u5B58\u7F8E\u5B66\uFF1A\u8D5A\u591F\u5403\u6CE1\u9762\u7684\u94B1\u5C31\u662F\u771F\u6B63\u7684\u76C8\u5229\u8D77\u70B9",
    usedInSurface: "revenue",
    riskLevel: "low"
  },
  {
    id: "echo-first-room",
    layer: "echo",
    primaryCopy: "\u7B2C\u4E00\u95F4\u623F\u95F4\u4E0D\u5FC5\u4F53\u9762\uFF0C\u4F46\u65B9\u5411\u5FC5\u987B\u771F\u5B9E\u3002",
    secondaryCopy: "The first room doesn't have to be impressive. The direction does.",
    sourceInspiration: "\u8F66\u5E93/\u6E56\u7554\u82B1\u56ED \u2014 \u6240\u6709\u4F1F\u5927\u516C\u53F8\u7684\u5171\u540C\u8D77\u70B9\uFF1A\u975E\u6B63\u5F0F\u7A7A\u95F4\u91CC\u8BDE\u751F\u7684\u8BA4\u771F\u4E8B\u4E1A (HP garage, Alibaba's Lakeside apartment)",
    usedInSurface: "onboarding",
    riskLevel: "low"
  }
];

// src/microcopy.ts
var MILESTONE_COPY_PACK = [
  {
    id: "first_room",
    copy: {
      "zh-CN": { primary: "\u7B2C\u4E00\u95F4\u623F\u95F4\u5DF2\u7ECF\u51C6\u5907\u597D\u3002" },
      "en-US": { primary: "The first room is ready." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "imagining",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "small_room",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_folder",
    copy: {
      "zh-CN": { primary: "\u8BB8\u591A\u516C\u53F8\uFF0C\u6700\u521D\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6\u5939\u3002" },
      "en-US": { primary: "Many companies begin as a folder." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "imagining",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "small_room",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_table",
    copy: {
      "zh-CN": { primary: "\u7B2C\u4E00\u5F20\u684C\u5B50\u6709\u4E86\u7B2C\u4E8C\u4E2A\u4EBA\u3002" },
      "en-US": { primary: "The first table has a second seat." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "assembling",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "the_table",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_signal",
    copy: {
      "zh-CN": { primary: "\u771F\u5B9E\u4E16\u754C\u5F00\u59CB\u8BF4\u8BDD\u4E86\u3002" },
      "en-US": { primary: "The real world has started talking." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "validating",
    surface: "milestone",
    voiceRegister: "operator",
    culturalMotif: "ship_it",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_ship",
    copy: {
      "zh-CN": { primary: "\u4E16\u754C\u7B2C\u4E00\u6B21\u770B\u89C1\u5B83\u3002" },
      "en-US": { primary: "The world sees it for the first time." }
    },
    act: "building",
    throughline: "milestone",
    stage: "shipping",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "ship_it",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_believer",
    copy: {
      "zh-CN": { primary: "\u4ECE\u4ECA\u5929\u8D77\uFF0C\u4F60\u4E0D\u518D\u53EA\u4E3A\u81EA\u5DF1\u5F00\u53D1\u3002" },
      "en-US": {
        primary: "From today, you are no longer building only for yourself."
      }
    },
    act: "building",
    throughline: "milestone",
    stage: "shipping",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "first_believer",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_revenue",
    copy: {
      "zh-CN": { primary: "\u68A6\u60F3\u5F00\u59CB\u62E5\u6709\u73B0\u91D1\u6D41\u3002" },
      "en-US": { primary: "The dream has cash flow now." }
    },
    act: "building",
    throughline: "milestone",
    stage: "operating",
    surface: "milestone",
    voiceRegister: "operator",
    culturalMotif: "survival_first",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_return",
    copy: {
      "zh-CN": { primary: "\u56DE\u6765\uFF0C\u6BD4\u6765\u8FC7\u66F4\u91CD\u8981\u3002" },
      "en-US": { primary: "Returning matters more than visiting." }
    },
    act: "growing",
    throughline: "milestone",
    stage: "growing",
    surface: "milestone",
    voiceRegister: "operator",
    culturalMotif: "first_believer",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_team",
    copy: {
      "zh-CN": { primary: "\u4E09\u4E2A\u4EBA\uFF0C\u5C40\u5C31\u5F00\u59CB\u6210\u5F62\u3002" },
      "en-US": { primary: "Three people can begin to form a company." }
    },
    act: "starting",
    throughline: "milestone",
    stage: "assembling",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "the_table",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_crowd",
    copy: {
      "zh-CN": { primary: "\u7B2C\u4E00\u5F20\u684C\u5B50\u5750\u4E0D\u4E0B\u4E86\u3002" },
      "en-US": { primary: "The first table is getting crowded." }
    },
    act: "growing",
    throughline: "milestone",
    stage: "scaling",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "the_table",
    easterEggLayer: "echo",
    riskLevel: "low",
    sourceInspiration: "\u56DE\u54CD\u7B2C\u4E00\u5F20\u684C\u5B50 (first_table) \u2014 \u4ECE\u7B2C\u4E00\u4E2A\u540C\u4F34\u5230\u684C\u5B50\u5750\u6EE1\u4EBA\uFF0C\u662F\u4ECE\u4E8C\u4EBA\u5BF9\u8BDD\u5230\u771F\u6B63\u7EC4\u7EC7\u7684\u8DC3\u8FC1\uFF1Bthe same table that once seated two now cannot hold the team"
  },
  {
    id: "first_reset",
    // MC-H2: First Reset's real act is 'starting' (a pivot sends you back to start).
    // It is NOT act:'纵贯'. throughline:'failure' captures the cross-cutting nature.
    act: "starting",
    throughline: "failure",
    copy: {
      "zh-CN": { primary: "\u91CD\u542F\u4E0D\u662F\u5931\u8D25\uFF0C\u662F\u66F4\u8BDA\u5B9E\u7684\u5F00\u59CB\u3002" },
      "en-US": { primary: "A restart is a more honest beginning." }
    },
    stage: "imagining",
    surface: "failure_state",
    voiceRegister: "mentor",
    culturalMotif: "honest_restart",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_public",
    copy: {
      "zh-CN": { primary: "\u628A\u4E00\u90E8\u5206\u672A\u6765\uFF0C\u4EA4\u7ED9\u4E16\u754C\u3002" },
      "en-US": { primary: "Put a piece of the future in public." }
    },
    act: "growing",
    throughline: "milestone",
    stage: "growing",
    surface: "milestone",
    voiceRegister: "historian",
    culturalMotif: "new_garage",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "first_demo",
    copy: {
      "zh-CN": { primary: "\u8FD9\u4E0D\u662F\u5C55\u793A\uFF0C\u662F\u63A5\u53D7\u68C0\u9A8C\u3002" },
      "en-US": { primary: "This is not a show. It is a test." }
    },
    act: "building",
    throughline: "milestone",
    stage: "shipping",
    surface: "milestone",
    voiceRegister: "companion",
    culturalMotif: "ship_it",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  },
  {
    id: "graduation",
    copy: {
      "zh-CN": { primary: "\u4F60\u51FA\u5E08\u4E86\u3002\u4E0B\u4E00\u7A0B\u9700\u8981\u66F4\u5F3A\u7684\u88C5\u5907\u3002" },
      "en-US": {
        primary: "You've outgrown the basics. The road ahead needs stronger tools."
      }
    },
    act: "growing",
    throughline: "milestone",
    stage: "graduating",
    surface: "graduation",
    voiceRegister: "graduation",
    culturalMotif: "small_room",
    easterEggLayer: "metaphor",
    riskLevel: "low"
  }
];
function getMilestoneCopy(id, locale) {
  const entry = MILESTONE_COPY_PACK.find((e) => e.id === id);
  if (!entry) {
    throw new Error(`getMilestoneCopy: unknown MilestoneId "${id}"`);
  }
  const localeCopy = entry.copy[locale];
  if (!localeCopy) {
    throw new Error(`getMilestoneCopy: locale "${locale}" not found for milestone "${id}"`);
  }
  return {
    primary: localeCopy.primary,
    ...localeCopy.secondary !== void 0 ? { secondary: localeCopy.secondary } : {},
    ...localeCopy.cta !== void 0 ? { cta: localeCopy.cta } : {}
  };
}
var EASTER_EGG_REGISTRY = easter_egg_registry_default;
export {
  EASTER_EGG_REGISTRY,
  MILESTONE_COPY_PACK,
  getMilestoneCopy
};
//# sourceMappingURL=microcopy.js.map