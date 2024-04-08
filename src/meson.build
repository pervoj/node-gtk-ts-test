sources = [
  'main.ts',
  'win.ts',
  'templates.ts',
  'resources.ts',
]

blueprints_src = [
  'win.blp',
]

outputs = []
foreach source : sources
  outputs += source.replace('.ts', '.js')
endforeach

main = outputs[0]

blueprints_ui = []
foreach blueprint_file : blueprints_src
  blueprints_ui += blueprint_file.replace('.blp', '.ui')
endforeach

blueprints = custom_target('blueprints',
  input: blueprints_src,
  output: blueprints_ui,
  command: [blueprint, 'batch-compile', '@OUTDIR@', '@CURRENT_SOURCE_DIR@', '@INPUT@']
)

gnome.compile_resources(
  app_id,
  'gresource.xml',
  dependencies: blueprints,
  gresource_bundle: true,
  install: true,
  install_dir: resources_dir,
)

custom_target(
  build_by_default: true,
  command: [
    pm_command, 'exec', '--', 'esbuild',
    '--platform=node', '--format=cjs', '--minify',
    '--outdir=' + meson.project_build_root() / '@OUTDIR@',
    '@INPUT@',
  ],
  depends: pm_deps,
  input: sources,
  output: outputs,
  install: true,
  install_dir: script_dir,
)

bin_conf = configuration_data()
bin_conf.set('NODE', get_option('node'))
bin_conf.set('MAIN', main)
bin_conf.set('SCRIPT', script_dir)

configure_file(
  input: 'entrypoint.js.in',
  output: meson.project_name(),
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir'),
  install_mode: 'rwxr-xr-x',
)
