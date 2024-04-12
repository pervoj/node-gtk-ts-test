import Gio from "@girs/node-gio-2.0";
import { globSync } from "glob";
import { join } from "path";
import { RESOURCE_DIR } from "./constants";

export default function loadResources() {
  const pattern = join(RESOURCE_DIR, "**", "*.gresource");
  globSync(pattern).forEach((e) => Gio.resourcesRegister(Gio.resourceLoad(e)));
}
