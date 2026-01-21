# 📚 Contexto Completo do Projeto Ciclei

## 🎯 Visão Geral

**Ciclei** é um Progressive Web App (PWA) completo para gerenciamento de treinos, dieta, suplementação e rotina fitness. O nome é um trocadilho com "ciclo", representando o ciclo completo de treinos, alimentação e suplementação.

### Características Principais
- ✅ PWA instalável no celular
- ✅ Design único com identidade visual própria
- ✅ Mobile-first
- ✅ Dados armazenados localmente (localStorage)
- ✅ Sistema de perfis (Feminino/Masculino)
- ✅ Tema claro/escuro
- ✅ Sistema de gamificação (badges, streaks)
- ✅ Notificações
- ✅ Timer de descanso
- ✅ Progresso de treinos
- ✅ Estatísticas e histórico

---

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológico
- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router v7** - Roteamento
- **CSS Modules** - Estilização modular
- **Vite PWA Plugin** - Funcionalidades PWA
- **Workbox** - Service Worker
- **Lucide React** - Ícones

### Estrutura de Pastas
```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── data/          # Dados mockados e lógica de dados
├── contexts/      # Contextos React (Profile, Theme, Toast, Menu)
├── hooks/         # Custom hooks
├── utils/         # Funções utilitárias
└── styles/        # Estilos globais
```

---

## 💪 Sistema de Treinos

### Estrutura de Dados

#### Workout (Treino)
```typescript
interface Workout {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}
```

#### Exercise (Exercício)
```typescript
interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  restTime?: string;      // Tempo de descanso entre séries
  rpe?: number;           // Rate of Perceived Exertion (1-10)
  cadence?: string;       // Cadência do movimento
  notes?: string;        // Observações e dicas
}
```

### Treinos Disponíveis

#### Perfil Feminino

**Rotina ABC (3x/semana)** - `workouts.ts` (padrão)
1. **Treino A - Quadríceps + Panturrilha**
   - Foco: Parte frontal da perna com técnicas avançadas
   - Exercícios: Agachamento, Hack Machine, Leg Press, Elevação de Quadril, Abdutor, Panturrilha
   - Técnicas: Progressão de carga, Rest Pause, Repetições parciais, Pico de contração, Drop set

2. **Treino B - Costas, Peito, Ombros e Tríceps**
   - Foco: Parte superior do corpo com alta densidade
   - Exercícios: Abdômen, Pulley, Remada, Supino Inclinado, Elevação Frontal/Lateral, Tríceps
   - Técnicas: Pico de contração, Repetições parciais, Intervalos curtos (45s)

3. **Treino C - Posterior + Glúteos**
   - Foco: Parte posterior da perna e glúteos
   - Exercícios: Flexor Deitado/Sentado, Stiff, Afundo, Elevação de Quadril, Abdutor
   - Técnicas: Progressão de carga, Rest Pause, Pico de contração (3s no abdutor)

**Rotina ABCDEF (5x/semana)** - `workoutsABCDEF.ts` (opcional, toggle no menu)
1. **Treino A - Quadríceps (ABCDEF)**
   - Foco exclusivo em quadríceps com ativação pré-exaustão
   - Exercícios: Extensora (2x), Hack Machine, Leg Press, Adutor
   - Técnicas: Progressão de carga, Rest Pause, Repetições parciais, Drop set

2. **Treino B - Costas + Panturrilha (ABCDEF)**
   - Foco em costas e panturrilha
   - Exercícios: Abdômen (Supra + Infra), Panturrilha (2x), Pulley (Aberto + Supinado), Remada
   - Técnicas: Pico de contração, Super-set, Parar antes da falha

3. **Treino C - Posterior + Glúteos + Quadríceps (ABCDEF)**
   - Foco em posterior, glúteos e quadríceps
   - Exercícios: Flexor (Deitado + Sentado), Agachamento Smith, Leg Press, Elevação de Quadril, Abdutor
   - Técnicas: Progressão de carga, Rest Pause, Drop set

4. **Treino D - Peito, Ombros e Tríceps (ABCDEF)**
   - Complementa o Treino B para desenvolvimento completo do tronco
   - Exercícios: Abdômen, Panturrilha, Supino Inclinado, Elevação Lateral/Frontal, Tríceps
   - Técnicas: Pico de contração, Parar antes da falha

5. **Treino E - Quadríceps Submáximo (ABCDEF)**
   - Treino leve para recuperação ativa
   - Exercícios: Extensora (6 séries), Adutor
   - Técnicas: Pico de contração, Parar antes da falha (submáximo)

#### Perfil Masculino (`workoutsMale.ts`)
- **Push/Pull/Legs** - Divisão de treino para homens
- Estrutura similar mas com exercícios adaptados

### Funcionalidades de Treino

#### Progresso de Treino (`workoutProgress.ts`)
- Sistema de marcação de exercícios completados
- Persistência no localStorage
- Barra de progresso visual
- Limpeza de progresso

**Chave de armazenamento:** `ciclei-workout-progress-{workoutId}`

#### Último Treino (`lastWorkout.ts`)
- Salva o último treino visualizado na sessão
- Usa sessionStorage (reseta ao fechar aba)
- Salva caminho completo para navegação precisa
- Permite redirecionamento automático

**Chaves:**
- `ciclei-last-workout-id` - ID do treino
- `ciclei-last-workout-date` - Data do último acesso
- `ciclei-last-workout-path` - Caminho completo (`/workout/{id}`)

#### Navegação Inteligente
- Clicar em "Treinos" → Vai direto para o último treino visualizado
- Breadcrumb "Treinos" → Vai para lista (sem redirecionar)
- Botão voltar → Vai para lista (sem redirecionar)
- Timer → Volta para o treino específico de onde veio

#### Histórico de Treinos (`workoutHistory.ts`)
- Registra treinos completados por data
- Usado para calcular streaks e estatísticas
- Formato: `{ date: string, workoutId: string, workoutName: string }`

#### Pesos por Exercício (`exerciseWeights.ts`)
- Salva carga usada em cada exercício
- Persistência por treino e exercício
- Chave: `ciclei-exercise-weight-{workoutId}-{exerciseId}`

### Técnicas Avançadas de Treino

Os treinos utilizam técnicas avançadas para maximizar resultados. Todas as técnicas são explicadas no **Guia de Técnicas Avançadas** na página de treinos.

#### 1. Rest Pause ⏸️
- Após falha, descansar 10-15s e continuar com mais 2-3 reps
- Aumenta volume efetivo do treino
- Exemplo: `1x8-12+2 rest pause`

#### 2. Repetições Parciais 🔄
- Após falha completa, fazer 10 reps parciais (meio movimento)
- Aumenta tempo sob tensão
- Exemplo: `1x8-12+10 parciais`

#### 3. Pico de Contração ⏱️
- Segurar 2-3 segundos no ponto máximo de contração
- Melhora conexão mente-músculo
- Exemplo: `3x10-15 com 2s pico`

#### 4. Progressão de Carga 📈
- Começar leve e aumentar carga a cada série
- Aquecimento progressivo e prevenção de lesões
- Exemplo: `1x15-20 + 1x10-15 + 1x8-12 + 1x6-10`

#### 5. Drop Set ⬇️
- Após falha, reduzir carga em 30% e continuar até falhar
- Intensifica o estímulo
- Exemplo: `1x6-10+2 drop`

**Documentação completa:** `src/data/advancedTechniques.md`

### Rotina Semanal

#### Rotina ABC (3x/semana) - `routine.ts` (padrão)
```typescript
interface RoutineDay {
  id: string;
  day: string;
  workoutId: string;
  workoutName: string;
  rest: boolean;
  restActive?: boolean;
}
```

**Estrutura:**
- Segunda: Treino A (Quadríceps + Panturrilha)
- Terça: Descanso
- Quarta: Treino B (Costas, Peito, Ombros, Tríceps)
- Quinta: Descanso
- Sexta: Treino C (Posterior + Glúteos)
- Sábado: Descanso
- Domingo: Descanso

#### Rotina ABCDEF (5x/semana) - `routineABCDEF.ts` (opcional)
**Estrutura:**
- Segunda: Treino A (Quadríceps)
- Terça: Descanso
- Quarta: Treino B (Costas + Panturrilha)
- Quinta: Treino C (Posterior + Glúteos + Quadríceps)
- Sexta: Treino D (Peito, Ombros, Tríceps)
- Sábado: Treino E (Quadríceps Submáximo)
- Domingo: Descanso

**Toggle de Rotina:**
- Disponível no menu hamburger (apenas perfil feminino)
- Permite alternar entre ABC (padrão) e ABCDEF
- Persistência no localStorage (`routine-type`)
- Atualiza automaticamente todos os treinos e componentes relacionados

---

## 🍽️ Sistema de Alimentação

### Estrutura de Dados

#### DietDay (Dia da Dieta)
```typescript
interface DietDay {
  id: string;
  day: string;
  meals: Meal[];
}
```

#### Meal (Refeição)
```typescript
interface Meal {
  id: string;
  name: string;
  items: string[];
  calories?: number;
}
```

### Plano Alimentar

#### Perfil Feminino (`diet.ts`)
- **2100 calorias** diárias
- 6 refeições por dia:
  1. Café da Manhã (~350 cal)
  2. Almoço (~450 cal)
  3. Lanche (~200 cal)
  4. Pré-treino (~250 cal)
  5. Pós-treino (~400 cal)
  6. Jantar (~450 cal)

#### Perfil Masculino (`dietMale.ts`)
- Plano adaptado para necessidades masculinas
- Estrutura similar com quantidades ajustadas

### Receitas (`recipes.ts`)
- Receitas práticas e saudáveis
- Organizadas por tipo de refeição
- Links para vídeos quando disponível

### Lista de Compras (`shoppingList.ts`)
- Organização por categoria:
  - Proteínas
  - Carboidratos
  - Gorduras
  - Vegetais
  - Frutas
  - Laticínios
  - Outros
- Sistema de checkboxes
- Progresso por categoria

### Macros (`macros.ts`)
- Sistema de controle de macronutrientes
- Cálculo automático baseado em refeições
- Meta diária configurável

---

## 💊 Sistema de Suplementação

### Estrutura de Dados

#### SupplementSchedule (Cronograma)
```typescript
interface SupplementSchedule {
  id: string;
  moment: string;        // "Manhã", "Tarde", "Noite"
  icon: string;          // Emoji
  supplements: Supplement[];
}
```

#### Supplement (Suplemento)
```typescript
interface Supplement {
  id: string;
  name: string;
  dosage: string;       // "1 cápsula", "30g", etc.
  time: string;          // "07:00", "12:00", etc.
  notes?: string;        // Observações importantes
  icon: string;          // Emoji
}
```

### Organização por Horários
- **Manhã** (🌅): Multivitamínico, Ômega 3, etc.
- **Pré-treino** (💪): Pré-treino, Creatina, etc.
- **Pós-treino** (🥤): Whey Protein, etc.
- **Tarde** (☀️): Colágeno, etc.
- **Noite** (🌙): Magnésio, ZMA, etc.

---

## 🎮 Sistema de Gamificação

### Badges (Conquistas) (`badges.ts`)

#### Tipos de Badges
1. **Primeiro Treino** - `first-workout`
2. **Sequências** - `week-streak`, `month-streak`
3. **Volume** - `10-workouts`, `25-workouts`, `50-workouts`, `100-workouts`
4. **Especiais** - `perfect-week`, `early-bird`, `night-owl`

#### Sistema de Desbloqueio
- Verificação automática ao completar treinos
- Persistência no localStorage
- Modal de celebração ao desbloquear

**Chave:** `ciclei-badges`

### Streaks (Sequências) (`streaks.ts`)

#### StreakData
```typescript
interface StreakData {
  currentStreak: number;      // Sequência atual
  longestStreak: number;      // Maior sequência
  lastWorkoutDate: string | null;
  totalWorkouts: number;
}
```

#### Funcionalidades
- Atualização automática ao completar treino
- Reseta se passar mais de 1 dia sem treinar
- Notificação ao atingir marcos (7, 14, 30 dias)

**Chave:** `ciclei-streak-data`

### Estatísticas (`stats.ts`)

#### Métricas Disponíveis
- Total de treinos completados
- Treinos este mês
- Sequência atual (streak)
- Maior sequência
- Badges desbloqueados
- Gráfico de treinos (últimos 6 meses)

**Chave:** `ciclei-workout-history`

---

## ⏱️ Timer de Descanso

### Funcionalidades (`RestTimer.tsx`)
- Tempos pré-definidos:
  - 30s, 45s, 60s (Hipertrofia)
  - 90s, 2min, 3min, 5min (Força)
- Timer customizado (até 10 minutos)
- Controles: Play, Pause, Stop, Reset
- Notificação sonora ao finalizar
- Vibração (se disponível)
- Barra de progresso circular
- Cores dinâmicas:
  - Verde: Finalizado
  - Vermelho: ≤10s restantes
  - Laranja: ≤30s restantes
  - Primária: Normal

### Navegação
- Volta automaticamente para o treino de onde veio
- Breadcrumb mostra "Treinos > Timer de Descanso"

---

## 🎨 Sistema de Design

### Paleta de Cores (`global.css`)

#### Cores Principais
- **Primary:** `#eb3157` (Rosa vibrante)
- **Primary Light:** `#ffdbe2` (Rosa claro)
- **Primary Dark:** `#d01e44` (Rosa escuro)
- **Secondary:** `#ffdbe2` (Rosa claro)
- **Background:** `#FFFFFF` (Branco puro)

#### Cores de Status
- **Success:** `#4caf50` (Verde)
- **Error:** `#f44336` (Vermelho)
- **Warning:** `#ff9800` (Laranja)

#### Variáveis CSS
- Sombras: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Bordas: `--radius-sm` (12px) até `--radius-xl` (24px)
- Transições: `--transition-fast` (0.2s) até `--transition-slow` (0.4s)
- Touch targets: `--touch-target-min` (44px)

### Tema Claro/Escuro (`ThemeContext.tsx`)
- Toggle no Header e Menu
- Persistência no localStorage
- Aplicação via classe no `html`
- Transições suaves

### Perfis (`ProfileContext.tsx`)
- **Feminino** (padrão): Treinos ABC (3x/semana) ou ABCDEF (5x/semana), Dieta 2100 cal
- **Masculino**: Push/Pull/Legs, Dieta adaptada
- Toggle de Perfil no Header
- Toggle de Rotina no Menu (apenas feminino): ABC ↔ ABCDEF
- Persistência no localStorage
- Aplicação via atributo `data-profile` no `html`

**Context API:**
```typescript
interface ProfileContextType {
  profileType: 'female' | 'male';
  routineType: 'abc' | 'abcdef';  // Apenas para perfil feminino
  setProfileType: (type: ProfileType) => void;
  toggleProfile: () => void;
  setRoutineType: (type: RoutineType) => void;
  toggleRoutine: () => void;
}
```

---

## 📱 Componentes Principais

### Header (`Header.tsx`)
- Título da página
- Botão voltar (opcional)
- Breadcrumbs (opcional)
- Streak badge
- Logo (opcional)
- Esconde ao scrollar para baixo

### BottomNavigation (`BottomNavigation.tsx`)
- 4 itens principais:
  1. Treinos (Dumbbell)
  2. Timer (Timer)
  3. Rotina (Calendar)
  4. Perfil (User)
- Esconde ao scrollar ou menu aberto
- Navegação inteligente para último treino

### HamburgerMenu (`HamburgerMenu.tsx`)
- Menu lateral deslizante
- Organizado por categorias:
  - 💪 Treino
  - 🍎 Nutrição
  - ⚙️ Outros
- Toggles no header:
  - RoutineToggle (ABC/ABCDEF) - apenas perfil feminino, linha separada
  - ProfileToggle (Feminino/Masculino)
  - ThemeToggle (Claro/Escuro)
- Overlay escuro ao abrir
- Menu hambúrguer branco
- Layout responsivo com toggle de rotina em linha separada para evitar quebra

### ExerciseList (`ExerciseList.tsx`)
- Lista de exercícios numerada
- Checkbox para marcar completo
- Campo de peso/carga
- Exibe: séries, reps, descanso, RPE, cadência, notas
- Salva peso automaticamente ao sair do campo

### WorkoutCard (`WorkoutCard.tsx`)
- Card visual do treino
- Destaque para último treino aberto
- Contador de exercícios
- Ícone de haltere

### RoutineToggle (`RoutineToggle.tsx`)
- Toggle para alternar entre rotina ABC e ABCDEF
- Visível apenas para perfil feminino
- Localizado no menu hamburger (linha separada)
- Ícones: Calendar (ABC) e CalendarDays (ABCDEF)
- Persistência no localStorage

### TechniquesGuide (`TechniquesGuide.tsx`)
- Guia expansível de técnicas avançadas de treino
- Localizado na página de treinos (apenas perfil feminino)
- Explica 5 técnicas principais:
  - Rest Pause ⏸️
  - Repetições Parciais 🔄
  - Pico de Contração ⏱️
  - Progressão de Carga 📈
  - Drop Set ⬇️
- Para cada técnica: descrição, como fazer, exemplo e benefícios
- Design responsivo com animações

### CelebrationModal (`CelebrationModal.tsx`)
- Modal de celebração ao desbloquear badge
- Modal de celebração ao atingir streak (7, 14, 30 dias)
- Animações
- Fecha automaticamente

---

## 📊 Páginas da Aplicação

### `/` - Workouts (Treinos)
- Lista de treinos disponíveis (ABC ou ABCDEF conforme toggle)
- Redirecionamento automático para último treino
- Destaque visual no último treino aberto
- **Guia de Técnicas Avançadas** (apenas perfil feminino):
  - Seção expansível com botão "O que significam essas técnicas?"
  - Explica todas as nomenclaturas técnicas usadas nos treinos
  - Rest Pause, Repetições Parciais, Pico de Contração, Progressão de Carga, Drop Set
  - Cada técnica com descrição, passo a passo, exemplo e benefícios

### `/workout/:id` - WorkoutDetail (Detalhes do Treino)
- Informações completas do treino
- Lista de exercícios com progresso
- Barra de progresso
- Links para aquecimento e alongamento
- Botão limpar progresso

### `/rest-timer` - RestTimer (Timer de Descanso)
- Timer com tempos pré-definidos
- Timer customizado
- Controles completos
- Notificações

### `/routine` - Routine (Rotina Semanal)
- Visão semanal dos treinos
- Links diretos para cada treino
- Destaque para dia atual

### `/diet` - Diet (Dieta)
- Plano alimentar semanal
- Cards por refeição
- Calorias por refeição

### `/nutrition` - Nutrition (Plano Alimentar)
- Visão detalhada do plano nutricional
- Organização por dia da semana

### `/shopping` - ShoppingList (Lista de Compras)
- Itens organizados por categoria
- Checkboxes interativos
- Progresso por categoria

### `/supplements` - Supplements (Suplementação)
- Cronograma de suplementos
- Organização por horário
- Dosagens e observações

### `/macros` - Macros (Controle de Macros)
- Cálculo de macronutrientes
- Meta diária
- Progresso visual

### `/recipes` - Recipes (Receitas)
- Receitas práticas
- Organizadas por tipo de refeição

### `/warmup` - Warmup (Aquecimento)
- Rotinas de aquecimento
- Específicas por treino

### `/stretches` - Stretches (Alongamentos)
- Alongamentos específicos para cada treino
- Suporta treinos ABC e ABCDEF (conforme rotina selecionada)
- Alongamentos adaptados para cada grupo muscular trabalhado
- Instruções detalhadas com duração recomendada
- Organizados por treino

### `/stats` - Stats (Estatísticas)
- Total de treinos
- Streaks
- Badges desbloqueados
- Gráfico de treinos (6 meses)

### `/diary` - Diary (Diário)
- Registro de sentimentos por treino
- Histórico emocional

### `/videos` - Videos (Vídeos)
- Vídeos de execução de exercícios
- Dicas e técnicas

### `/tips` - Tips (Dicas)
- Dicas de treino, alimentação, suplementação
- Motivação
- Playlist do Spotify

### `/profile` - Profile (Perfil)
- Controle de peso
- Gráfico de evolução
- Configurações

---

## 💾 Sistema de Armazenamento

### StorageManager (`storage.ts`)
- Gerenciamento centralizado do localStorage
- Prefixo: `ciclei-`
- Versionamento: `ciclei-storage-version`
- Tratamento de erros
- Limpeza automática em caso de quota excedida
- Exportação/Importação de dados

### Chaves de Armazenamento

#### SessionStorage (reseta ao fechar aba)
- `ciclei-last-workout-id` - ID do último treino
- `ciclei-last-workout-date` - Data do último acesso
- `ciclei-last-workout-path` - Caminho completo do treino

#### LocalStorage (persistente)
- `ciclei-profile-type` - Tipo de perfil (female/male)
- `ciclei-theme` - Tema (light/dark)
- `ciclei-workout-progress-{workoutId}` - Progresso do treino
- `ciclei-workout-history` - Histórico de treinos
- `ciclei-streak-data` - Dados de streaks
- `ciclei-badges` - Badges desbloqueados
- `ciclei-exercise-weight-{workoutId}-{exerciseId}` - Peso do exercício
- `ciclei-weight-entries` - Entradas de peso
- `ciclei-menu-open` - Estado do menu

---

## 🔔 Sistema de Notificações

### NotificationService (`notificationService.ts`)
- Solicitação de permissão
- Notificações push
- Notificações locais

### Notificações Disponíveis (`notifications.ts`)
- Treino completo
- Streak atingido
- Lembrete de treino
- Lembrete de suplemento

---

## 🎯 Funcionalidades Especiais

### Navegação Inteligente
- **Clicar em "Treinos"** → Vai direto para último treino
- **Breadcrumb "Treinos"** → Vai para lista (sem redirecionar)
- **Botão voltar** → Vai para lista (sem redirecionar)
- **Timer** → Volta para treino específico

### Progresso de Treino
- Marcação de exercícios completados
- Barra de progresso visual
- Persistência automática
- Limpeza de progresso

### Sistema de Peso
- Salva carga por exercício
- Persistência por treino
- Input numérico com validação

### Streak Badge
- Exibido no Header
- Atualização automática
- Destaque visual

### Safety Disclaimer
- Modal de aviso ao primeiro acesso
- Informações sobre segurança
- Aceite obrigatório

### SEO
- Meta tags dinâmicas
- Títulos por página
- Descrições otimizadas
- Keywords relevantes

### Acessibilidade
- Skip links
- ARIA labels
- Touch targets mínimos (44px)
- Contraste adequado
- Navegação por teclado

---

## 🚀 Deploy e Build

### Scripts Disponíveis
```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Linter
```

### Build
- TypeScript compilation
- Vite build
- PWA assets
- Service Worker (Workbox)

### Deploy (Netlify)
- Build command: `npm run build`
- Publish directory: `dist`
- Configuração em `netlify.toml`

---

## 📝 Convenções e Padrões

### Nomenclatura
- Componentes: PascalCase (`WorkoutCard.tsx`)
- Arquivos CSS: Module pattern (`WorkoutCard.module.css`)
- Funções: camelCase (`getLastWorkout`)
- Constantes: UPPER_SNAKE_CASE (`LAST_WORKOUT_KEY`)

### Estrutura de Componentes
```typescript
// Imports
import { ... } from '...';

// Interfaces/Types
interface Props { ... }

// Componente
export const Component = ({ ... }: Props) => {
  // Hooks
  // Estados
  // Efeitos
  // Handlers
  // Render
  return (...);
};
```

### CSS Modules
- Classes com kebab-case
- Variáveis CSS globais
- Responsive com media queries
- Mobile-first approach

---

## 🔧 Utilitários

### lastWorkout.ts
- Gerencia último treino visualizado
- SessionStorage
- Navegação inteligente

### storage.ts
- StorageManager centralizado
- Tratamento de erros
- Versionamento

### macroCalculator.ts
- Cálculo de macronutrientes
- Baseado em refeições

### progression.ts
- Sistema de progressão de treino
- Cálculo de cargas

### validation.ts
- Validações de formulários
- Validações de dados

### notifications.ts
- Notificações de treino
- Notificações de streak

## 📁 Arquivos de Dados

### Treinos
- `workouts.ts` - Treinos ABC (3x/semana) - padrão feminino
- `workoutsABCDEF.ts` - Treinos ABCDEF (5x/semana) - opcional feminino
- `workoutsMale.ts` - Treinos Push/Pull/Legs - masculino
- `workoutsImproved.ts` - Versão melhorada dos treinos (referência)

### Rotinas
- `routine.ts` - Rotina ABC (3x/semana) - padrão
- `routineABCDEF.ts` - Rotina ABCDEF (5x/semana) - opcional
- `routineImproved.ts` - Rotina melhorada (referência)

### Técnicas e Documentação
- `advancedTechniques.md` - Documentação completa das técnicas avançadas
- Explicações detalhadas de Rest Pause, Repetições Parciais, Pico de Contração, Progressão de Carga e Drop Set

### Análises Profissionais
- `ANALISE_ABC_VS_ABCDEF.md` - Comparação profissional entre rotina ABC e ABCDEF
- `ANALISE_TREINO_PROFISSIONAL.md` - Análise comparativa dos treinos do projeto vs treino externo
- Recomendações de quando usar cada rotina
- Pontos fortes e melhorias sugeridas

---

## 🎨 Identidade Visual

### Logo
- Logo principal: `/logo-ciclei.png`
- Logo alternativo: `/logo-peach.png`
- Cores: Rosa vibrante (#eb3157)

### Elementos Visuais
- Gradientes suaves
- Bordas arredondadas
- Sombras elegantes
- Animações discretas
- Microinterações

### Tipografia
- Font principal: Poppins
- Font secundária: Montserrat
- Fallback: System fonts

---

## 📱 PWA Features

### Manifest (`manifest.webmanifest`)
- Nome: Ciclei
- Short name: Ciclei
- Icons: 192x192, 512x512
- Theme color: #eb3157
- Background color: #FFFFFF
- Display: standalone

### Service Worker
- Workbox
- Cache strategy
- Offline support
- Update notifications

---

## 🐛 Tratamento de Erros

### ErrorBoundary
- Captura erros React
- UI de fallback
- Logging de erros

### Validação de Dados
- Validação de localStorage
- Fallback para valores padrão
- Tratamento de JSON corrompido

---

## 📈 Melhorias Futuras

### Possíveis Adições
- Sincronização com backend
- Backup na nuvem
- Compartilhamento de treinos
- Comunidade
- Planos personalizados
- Integração com wearables
- Análise avançada de progresso

---

## 👩‍💻 Desenvolvedora

**Stefany Repetcki**
- 📷 [Instagram](https://www.instagram.com/tefinha.zip/)
- 💼 [LinkedIn](https://www.linkedin.com/in/stefany-repetcki/)

---

## 📄 Licença

Projeto desenvolvido para uso pessoal.

---

**Última atualização:** Janeiro 2025
**Versão:** 0.0.0

---

## 🆕 Mudanças Recentes (Janeiro 2025)

### Rotina ABCDEF (5x/semana)
- ✅ Adicionada rotina ABCDEF com 6 treinos (A, B, C, D, E)
- ✅ Toggle de rotina no menu hamburger (apenas perfil feminino)
- ✅ Treinos focados em quadríceps com técnicas avançadas
- ✅ Rotina ABC permanece como padrão

### Guia de Técnicas Avançadas
- ✅ Componente expansível na página de treinos
- ✅ Explicação completa de todas as nomenclaturas técnicas
- ✅ Rest Pause, Repetições Parciais, Pico de Contração, Progressão de Carga, Drop Set
- ✅ Cada técnica com descrição, passo a passo, exemplo e benefícios

### Melhorias nos Treinos ABC
- ✅ Treinos atualizados com técnicas avançadas
- ✅ Progressão de carga implementada
- ✅ Rest Pause e Repetições Parciais adicionados
- ✅ Pico de contração em exercícios específicos

### Alongamentos
- ✅ Alongamentos atualizados para incluir todos os treinos ABCDEF
- ✅ Alongamentos específicos para cada treino (A, B, C, D, E)

### Layout e UX
- ✅ Menu hamburger corrigido para evitar quebra com toggle de rotina
- ✅ Toggle de rotina em linha separada no menu
- ✅ Layout responsivo aprimorado

