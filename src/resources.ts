import Gio from "@girs/node-gio-2.0";
import { globSync } from "glob";
import { join } from "path";

export default function loadResources() {
  const pattern = join(__dirname, "..", "resources", "**", "*.gresource");
  globSync(pattern).forEach((e) => Gio.resourcesRegister(Gio.resourceLoad(e)));
}
