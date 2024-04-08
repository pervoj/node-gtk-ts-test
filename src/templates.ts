import Gio from "@girs/node-gio-2.0";
import GLib from "@girs/node-glib-2.0";
import GObject from "@girs/node-gobject-2.0";
import Gtk from "@girs/node-gtk-4.0";
import { readFileSync } from "fs";
import { StringDecoder } from "string_decoder";

export default class Template {
  _builder = new Gtk.Builder();
  _data: string;
  _target: Gtk.Widget;

  constructor(
    target: Gtk.Widget,
    arg: string | { resource: string } | { file: string }
  ) {
    const data =
      typeof arg === "string"
        ? arg
        : typeof arg === "object"
        ? Object.hasOwn(arg, "resource")
          ? stringFromResource(arg["resource"])
          : Object.hasOwn(arg, "file")
          ? stringFromFile(arg["file"])
          : undefined
        : undefined;

    if (!data) throw new Error();
    this._data = data;
    this._target = target;

    this._initTemplate();
  }

  _initTemplate() {
    this._builder.setCurrentObject(this._target);
    this._builder.extendWithTemplate(
      this._target,
      this._target.__gtype__ as unknown as GObject.GType,
      this._data,
      this._data.length
    );
  }

  child<T extends Gtk.Widget>(id: string) {
    const object = this._builder.getObject(id);
    if (!object) throw Error();
    return object as T;
  }
}

function readFile(path: string) {
  return readFileSync(path);
}

function readResource(path: string) {
  return new Uint8Array(
    (
      Gio.resourcesLookupData(path, Gio.ResourceLookupFlags.NONE) as GLib.Bytes
    )?.getData() || []
  );
}

function bytesToString(bytes: Uint8Array) {
  const decoder = new StringDecoder("utf8");
  return decoder.write(bytes);
}

function stringFromFile(path: string) {
  return bytesToString(readFile(path));
}

function stringFromResource(path: string) {
  return bytesToString(readResource(path));
}
