import Adw from "@girs/node-adw-1";
import Gio from "@girs/node-gio-2.0";
import MainWindow from "./win";
import loadResources from "./resources";

export default function main(args: string[]) {
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
