import { useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'
import { useToast } from '../../contexts/ToastContext'

export function PwaReloadListener() {
  const { showToast } = useToast()

  useEffect(() => {
    registerSW({
      onNeedRefresh() {
        showToast('Nova versão disponível — recarregue a página para atualizar.', 'info')
      },
      onOfflineReady() {
        showToast('Conteúdo em cache: pode usar o app sem conexão.', 'info')
      },
    })
  }, [showToast])

  return null
}
