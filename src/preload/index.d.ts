import { ElectronAPI } from '@electron-toolkit/preload'
import { PasswordVault } from '../main/model/password_vault'

interface MainProcessApi {
  ping: () => string
  getVaults: () => Promise<PasswordVault[]>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: MainProcessApi
  }
}
