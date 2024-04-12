import Adw from "@girs/node-adw-1";
import Gio from "@girs/node-gio-2.0";
import {
  setLocale,
  bindTextDomain,
  bindTextDomainCodeset,
  textDomain,
  LC,
} from "libintl";
import MainWindow from "./win";
import loadResources from "./resources";
import { GETTEXT_PACKAGE, LOCALE_DIR } from "./constants";

export default function main(args: string[]) {
  setLocale(LC.all, "");
  bindTextDomain(GETTEXT_PACKAGE, LOCALE_DIR);
  bindTextDomainCodeset(GETTEXT_PACKAGE, "UTF-8");
  textDomain(GETTEXT_PACKAGE);

  loadResources();

  const app = new Adw.Application({
    application_id: "cz.pervoj.NodeGtkTsTest",
    flags: Gio.ApplicationFlags.FLAGS_NONE,
  });

  app.connect("activate", () => {
    (app.activeWindow ?? new MainWindow(app)).present();
  });

  app.run(args);
}
