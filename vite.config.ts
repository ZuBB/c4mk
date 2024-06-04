import path from "path"
import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import Info from 'unplugin-info/vite';
import posthtml from '@vituum/vite-plugin-posthtml'
import { inlineFavicon } from 'posthtml-inline-favicon';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const plugins = [react(), Info(),];

  if (command === 'build') {
    plugins.push(
      viteSingleFile({ removeViteModuleLoader: true }) as PluginOption[],
      posthtml({
        plugins: [
          inlineFavicon()
        ]
      })
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
