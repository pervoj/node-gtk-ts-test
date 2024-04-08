project('node-gtk-ts-test',
  version: '0.0.1',
  meson_version: '>= 0.62.0',
  default_options: [ 'warning_level=2', 'werror=false', ],
)

app_id = 'cz.pervoj.NodeGtkTsTest'

script_dir = get_option('datadir') / meson.project_name() / 'script'
resources_dir = get_option('datadir') / meson.project_name() / 'resources'

gnome = import('gnome')

pm = find_program('npm', required: true)
pm_args = ['-C', meson.project_source_root()]
pm_command = [pm, pm_args]

blueprint = find_program('blueprint-compiler')

pm_deps = custom_target(
  command: [ pm_command, 'install', '--offline' ],
  output: 'dependencies'
)

subdir('src')