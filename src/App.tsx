import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { BottomNavigation } from './components/BottomNavigation/BottomNavigation';
import { Footer } from './components/Footer/Footer';
import { SEO } from './components/SEO/SEO';
import { SkipLink } from './components/SkipLink/SkipLink';
import { MenuProvider } from './contexts/MenuContext';
import { ToastProvider } from './contexts/ToastContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { initializeNotifications } from './utils/notificationService';
import { SkeletonLoader } from './components/SkeletonLoader/SkeletonLoader';
import { SafetyDisclaimer } from './components/SafetyDisclaimer/SafetyDisclaimer';
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
const Stats = lazy(() => import('./pages/Stats/Stats').then(m => ({ default: m.Stats })));
const Diary = lazy(() => import('./pages/Diary/Diary').then(m => ({ default: m.Diary })));
const Recipes = lazy(() => import('./pages/Recipes/Recipes').then(m => ({ default: m.Recipes })));
const Profile = lazy(() => import('./pages/Profile/Profile').then(m => ({ default: m.Profile })));
const Macros = lazy(() => import('./pages/Macros/Macros').then(m => ({ default: m.Macros })));
const RestTimer = lazy(() => import('./pages/RestTimer/RestTimer').then(m => ({ default: m.RestTimer })));
const Water = lazy(() => import('./pages/Water/Water').then(m => ({ default: m.Water })));

// Loading component melhorado com Skeleton Loader
const PageLoader = () => (
  <div 
    style={{ 
      padding: '2rem 1rem',
    }}
    role="status"
    aria-label="Carregando página"
  >
    <SkeletonLoader type="card" count={3} />
  </div>
);

function App() {
  // Inicializar notificações quando o app carrega
  useEffect(() => {
    initializeNotifications().catch(console.error);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <ProfileProvider>
            <MenuProvider>
              <ToastProvider>
            <SafetyDisclaimer />
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
            <Route 
              path="/stats" 
              element={
                <>
                  <SEO 
                    title="Minhas Estatísticas - Ciclei"
                    description="Veja seu progresso, conquistas e estatísticas de treino. Acompanhe sua evolução no Ciclei."
                    keywords="ciclei, estatísticas, progresso, conquistas, badges, streaks, evolução"
                  />
                  <Stats />
                </>
              } 
            />
            <Route 
              path="/diary" 
              element={
                <>
                  <SEO 
                    title="Meu Diário - Ciclei"
                    description="Registre como você se sentiu em cada treino. Acompanhe sua evolução emocional e física."
                    keywords="ciclei, diário, anotações, treino, bem-estar, evolução"
                  />
                  <Diary />
                </>
              } 
            />
            <Route 
              path="/recipes" 
              element={
                <>
                  <SEO 
                    title="Receitas - Ciclei"
                    description="Receitas práticas e saudáveis para seu ciclo alimentar. Receitas para café da manhã, almoço, lanche, pré-treino, pós-treino e jantar."
                    keywords="ciclei, receitas, receitas saudáveis, receitas fitness, receitas para treino, comida saudável"
                  />
                  <Recipes />
                </>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <>
                  <SEO 
                    title="Meu Perfil - Ciclei"
                    description="Acompanhe sua evolução e controle seu peso. Visualize gráficos de progresso e gerencie seu perfil fitness."
                    keywords="ciclei, perfil, peso, controle de peso, evolução, gráfico de peso, perfil fitness"
                  />
                  <Profile />
                </>
              } 
            />
            <Route 
              path="/macros" 
              element={
                <>
                  <SEO 
                    title="Controle de Macros - Ciclei"
                    description="Gerencie seus macronutrientes diários. Acompanhe proteínas, carboidratos, gorduras e calorias de forma simples e eficiente."
                    keywords="ciclei, macros, macronutrientes, proteína, carboidrato, gordura, controle nutricional, dieta flexível"
                  />
                  <Macros />
                </>
              } 
            />
            <Route 
              path="/rest-timer" 
              element={
                <>
                  <SEO 
                    title="Timer de Descanso - Ciclei"
                    description="Controle seu tempo de descanso entre séries. Timer com tempos recomendados para hipertrofia e força máxima."
                    keywords="ciclei, timer, descanso, intervalo, treino, hipertrofia, força, cronômetro"
                  />
                  <RestTimer />
                </>
              } 
            />
            <Route 
              path="/water" 
              element={
                <>
                  <SEO 
                    title="Hidratação - Ciclei"
                    description="Controle sua hidratação diária. Acompanhe seu consumo de água e mantenha-se hidratado."
                    keywords="ciclei, água, hidratação, água diária, consumo de água, saúde"
                  />
                  <Water />
                </>
              } 
            />
            </Routes>
          </Suspense>
            <BottomNavigation />
            <Footer />
          </div>
          </ToastProvider>
        </MenuProvider>
        </ProfileProvider>
        </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }

export default App;
