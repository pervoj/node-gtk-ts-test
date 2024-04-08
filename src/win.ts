import Adw from "@girs/node-adw-1";
import Gtk from "@girs/node-gtk-4.0";
import gi from "@girs/node-gtk";
import Template from "./templates";

export default class MainWindow extends Adw.ApplicationWindow {
  static GTypeName = "MainWindow";

  _template = new Template(this, {
    resource: "/cz/pervoj/NodeGtkTsTest/win.ui",
  });

  constructor(app: Adw.Application) {
    super({ application: app });
  }
}

gi.registerClass(MainWindow);
