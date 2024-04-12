import Adw from "@girs/node-adw-1";
import Gtk from "@girs/node-gtk-4.0";
import gi from "@girs/node-gtk";
import { gettext as _ } from "libintl";
import Template from "./templates";

export default class MainWindow extends Adw.ApplicationWindow {
  static GTypeName = "MainWindow";

  _template = new Template(this, {
    resource: "/cz/pervoj/NodeGtkTsTest/win.ui",
  });

  _button: Gtk.Button = this._template.child("button");

  constructor(app: Adw.Application) {
    super({ application: app });

    this._button.on("clicked", () => {
      console.log(_("The button was pressed!"));
    });
  }
}

gi.registerClass(MainWindow);
