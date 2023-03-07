import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* Componente do react router dom que puxa os componentes da pagina atual */}
    </LayoutContainer>
  )
}
