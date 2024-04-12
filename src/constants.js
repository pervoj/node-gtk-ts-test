const { basename, dirname, join } = require("path");

exports.PROJECT_NAME = basename(dirname(__dirname));
exports.APP_ID = "@APP_ID@";
exports.VERSION = "@VERSION@";

exports.RESOURCE_DIR = join(dirname(__dirname), "resources");
exports.LOCALE_DIR = join(dirname(dirname(__dirname)), "locale");

exports.GETTEXT_PACKAGE = "@GETTEXT_PACKAGE@";
