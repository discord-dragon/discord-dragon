module.exports = {
  // Core
  DragonClient: require("./struct/DragonClient"),
  DragonHandler: require("./struct/DragonHandler"),
  DragonModule: require("./struct/DragonModule"),
  ClientUtil: require("./struct/ClientUtil"),

  // Commands
  Command: require("./struct/commands/Command"),
  CommandHandler: require("./struct/commands/CommandHandler"),
  CommandUtil: require("./struct/commands/CommandUtil"),
  Flag: require("./struct/commands/Flag"),

  // Arguments
  Argument: require("./struct/commands/arguments/Argument"),
  TypeResolver: require("./struct/commands/arguments/TypeResolver"),

  // Inhibitors
  Inhibitor: require("./struct/inhibitors/Inhibitor"),
  InhibitorHandler: require("./struct/inhibitors/InhibitorHandler"),

  // Listeners
  Listener: require("./struct/listeners/Listener"),
  ListenerHandler: require("./struct/listeners/ListenerHandler"),

  // Utilities
  DragonError: require("./util/DragonError"),
  Category: require("./util/Category"),
  Constants: require("./util/Constants"),
  Util: require("./util/Util"),
  version: require("../package.json").version
};
