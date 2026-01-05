import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { BottomNavigation } from './components/BottomNavigation/BottomNavigation';
import { Footer } from './components/Footer/Footer';
import { SEO } from './components/SEO/SEO';
import { SkipLink } from './components/SkipLink/SkipLink';
import { MenuProvider } from './contexts/MenuContext';
import './styles/global.css';

// Lazy loading de páginas para melhor performance
const Workouts = lazy(() => import('./pages/Workouts/Workouts').then(m => ({ default: m.Workouts })));
const WorkoutDetail = lazy(() => import('./pages/WorkoutDetail/WorkoutDetail').then(m => ({ default: m.WorkoutDetail })));
const Diet = lazy(() => import('./pages/Diet/Diet').then(m => ({ default: m.Diet })));
const Videos = lazy(() => import('./pages/Videos/Videos').then(m => ({ default: m.Videos })));
const Routine = lazy(() => import('./pages/Routine/Routine').then(m => ({ default: m.Routine })));
const Nutrition = lazy(() => import('./pages/Nutrition/Nutrition').then(m => ({ default: m.Nutrition })));
const ShoppingList = lazy(() => import('./pages/ShoppingList/ShoppingList').then(m => ({ default: m.ShoppingList })));
const Supplements = lazy(() => import('./pages/Supplements/Supplements').then(m => ({ default: m.Supplements })));
const Tips = lazy(() => import('./pages/Tips/Tips').then(m => ({ default: m.Tips })));
const Stretches = lazy(() => import('./pages/Stretches/Stretches').then(m => ({ default: m.Stretches })));
const Warmup = lazy(() => import('./pages/Warmup/Warmup').then(m => ({ default: m.Warmup })));

// Loading component melhorado
const PageLoader = () => (
  <div 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh',
      color: 'var(--color-primary)'
    }}
    role="status"
    aria-label="Carregando página"
  >
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }} aria-hidden="true">💪</div>
      <div>Carregando...</div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MenuProvider>
          <SkipLink />
          <SEO />
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <SEO 
                    title="Treinos - Ciclei"
                    description="Organize seu ciclo de treinos! Treino ABC avançado foco feminino com exercícios detalhados."
                    keywords="ciclei, treino, exercícios, treino ABC, treino feminino, ciclo de treinos"
                  />
                  <Workouts />
                </>
              } 
            />
            <Route 
              path="/workout/:id" 
              element={
                <>
                  <SEO 
                    title="Detalhes do Treino - Ciclei"
                    description="Veja os detalhes completos do seu treino com séries, repetições e observações."
                  />
                  <WorkoutDetail />
                </>
              } 
            />
            <Route 
              path="/diet" 
              element={
                <>
                  <SEO 
                    title="Dieta - Ciclei"
                    description="Plano alimentar equilibrado para seus objetivos. Organize suas refeições diárias."
                    keywords="ciclei, dieta, alimentação, plano alimentar, nutrição, ciclo alimentar"
                  />
                  <Diet />
                </>
              } 
            />
            <Route 
              path="/videos" 
              element={
                <>
                  <SEO 
                    title="Vídeos e Dúvidas - Ciclei"
                    description="Aprenda a execução correta dos exercícios com nossos vídeos de apoio."
                    keywords="ciclei, vídeos exercícios, como fazer exercícios, técnica de exercícios"
                  />
                  <Videos />
                </>
              } 
            />
            <Route 
              path="/routine" 
              element={
                <>
                  <SEO 
                    title="Rotina Semanal - Ciclei"
                    description="Visualize seu ciclo semanal de treinos e organize sua rotina fitness."
                  />
                  <Routine />
                </>
              } 
            />
            <Route 
              path="/nutrition" 
              element={
                <>
                  <SEO 
                    title="Plano Alimentar - Ciclei"
                    description="Plano alimentar completo de 2100 calorias. Organize seu ciclo de refeições de forma eficiente."
                    keywords="ciclei, plano alimentar, nutrição, refeições, dieta 2100 calorias, ciclo alimentar"
                  />
                  <Nutrition />
                </>
              } 
            />
            <Route 
              path="/shopping" 
              element={
                <>
                  <SEO 
                    title="Lista de Compras - Ciclei"
                    description="Organize suas compras por categoria. Lista completa de alimentos para seu ciclo alimentar."
                    keywords="ciclei, lista de compras, compras, alimentos, supermercado"
                  />
                  <ShoppingList />
                </>
              } 
            />
            <Route 
              path="/supplements" 
              element={
                <>
                  <SEO 
                    title="Suplementação - Ciclei"
                    description="Organize seu ciclo de suplementos ao longo do dia. Horários e dosagens corretas."
                    keywords="ciclei, suplementos, suplementação, whey, creatina, vitaminas, ciclo de suplementos"
                  />
                  <Supplements />
                </>
              } 
            />
            <Route 
              path="/tips" 
              element={
                <>
                  <SEO 
                    title="Dicas & Motivação - Ciclei"
                    description="Dicas de treino, alimentação, suplementação e motivação. Playlist do Spotify para seus treinos."
                    keywords="ciclei, dicas treino, motivação, playlist spotify, dicas alimentação, dicas suplementação"
                  />
                  <Tips />
                </>
              } 
            />
            <Route 
              path="/stretches" 
              element={
                <>
                  <SEO 
                    title="Alongamentos - Ciclei"
                    description="Alongamentos específicos para cada treino. Aprenda os melhores alongamentos para Treino A, B e C."
                    keywords="ciclei, alongamentos, flexibilidade, treino A, treino B, treino C, recuperação muscular"
                  />
                  <Stretches />
                </>
              } 
            />
            <Route 
              path="/warmup" 
              element={
                <>
                  <SEO 
                    title="Aquecimento - Ciclei"
                    description="Rotinas de aquecimento específicas para cada treino. Prepare seu corpo antes do treino com exercícios de mobilidade e ativação."
                    keywords="ciclei, aquecimento, mobilidade, ativação muscular, preparação para treino, prevenção de lesões"
                  />
                  <Warmup />
                </>
              } 
            />
            </Routes>
          </Suspense>
            <BottomNavigation />
            <Footer />
          </div>
        </MenuProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
