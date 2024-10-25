# B2Blue - Controle de Volume de Armazenamento de Resíduos

Este projeto é um sistema de controle de volume de armazenamento para estações de resíduos, desenvolvido usando React e Material-UI.

## Índice

- [B2Blue - Controle de Volume de Armazenamento de Resíduos](#b2blue---controle-de-volume-de-armazenamento-de-resíduos)
	- [Índice](#índice)
	- [Estrutura do Projeto](#estrutura-do-projeto)
	- [Principais Componentes](#principais-componentes)
		- [StorageStation](#storagestation)
			- [Props](#props)
		- [ControlPanel](#controlpanel)
			- [Props](#props-1)
		- [ReportsModal](#reportsmodal)
			- [Props](#props-2)
		- [API](#api)
			- [Funções](#funções)
		- [Hooks](#hooks)
			- [`useFetchData`](#usefetchdata)
			- [`useStations`](#usestations)
			- [`useUserName`](#useusername)
		- [Sumário](#sumário)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

|-- .env
|-- .gitignore
|-- .prettierrc
|-- package.json
|-- public
|-- README.md
|-- src
|---|-- App.tsx
|---|-- assets
|---|-- components
|-------|-- ControlPanel
|-----------|-- ControlPanel.tsx
|-------|-- Footer
|-----------|-- Footer.tsx
|-------|-- Header
|-----------|-- Header.tsx
|-------|-- hooks
|-----------|-- useFetchData.ts
|-----------|-- useStations.ts
|-----------|-- useUserName.ts
|-------|-- MainSection
|-----------|-- MainSection.tsx
|-------|-- Modals
|-----------|-- NameModal.tsx
|-------|-- Reports
|-----------|-- ReportsModal.tsx
|-----------|-- ReportsTable.tsx
|-----------|-- SelectReport.tsx
|-------|-- shared
|-----------|-- GenericDialog.tsx
|-----------|-- Loading.tsx
|-------|-- StorageStation
|-----------|-- StorageStation.tsx
|---|-- declaration.d.ts
|---|-- index.css
|---|-- index.tsx
|---|-- services
|-------|-- supabaseClient.ts
|---|-- theme
|-------|-- theme.ts
|---|-- ts
|-------|-- types.ts
|---|-- utils
|-------|-- api.ts
|-- tsconfig.json


## Principais Componentes

### StorageStation

O componente `StorageStation` representa uma estação de armazenamento individual. Ele exibe o nome da estação, o volume atual e o status da coleta. Também fornece controles para iniciar, atualizar e concluir o processo de coleta.

#### Props

- `stationName`: O nome da estação.
- `volume`: O volume atual da estação.
- `collectionInProgress`: Indica se uma coleta está em andamento.
- `onStartCollection`: Função para iniciar a coleta.
- `onStationChange`: Função para gerenciar mudanças na estação.
- `onCompleteCollection`: Função para concluir a coleta.

### ControlPanel

O componente `ControlPanel` é responsável por gerenciar e exibir várias estações de armazenamento. Ele utiliza o componente `StorageStation` para exibir cada estação e gerencia a lógica para atualização dos dados das estações e gerenciamento das coletas.

#### Props

- `userName`: O nome do usuário.
- `stationsData`: Um array contendo dados das estações.

### ReportsModal

O componente `ReportsModal` exibe um modal com todos os relatórios buscados do banco de dados alocado na `Supabase`. Permite filtrar relatórios por estação e fornece uma visualização detalhada de cada relatório com data da coleta e o responsável pela confirmação da coleta.

#### Props

- `open`: Booleano que indica se o modal está aberto.
- `onClose`: Função para fechar o modal.

### API

O arquivo `api.ts` contém funções utilitárias para interagir com a API do Supabase. Essas funções incluem busca de dados, atualização de dados de estação e inserção de relatórios.


#### Funções

- `fetchData`: Busca dados de uma tabela especificada.
- `updateStation`: Atualiza os dados de uma estação.
- `insertReport`: Insere um novo relatório no banco de dados.
- `fetchReports`: Busca todos os relatórios do banco de dados.

### Hooks

A pasta `hooks` contém hooks personalizados utilizados em todo o projeto.

#### `useFetchData`

Um hook personalizado para buscar dados usando React Query. Ele simplifica a busca de dados e o gerenciamento de estado.

#### `useStations`

Um hook personalizado para gerenciar o estado das estações. Ele fornece gerenciamento de estado para a lista de estações e funções para atualizar esse estado.

#### `useUserName`

Um hook personalizado para gerenciar o nome do usuário. Ele lida com a recuperação do nome do usuário do armazenamento local e o atualiza conforme necessário.

### Sumário

Esta documentação fornece uma visão geral da estrutura do projeto e descrições dos principais componentes e algumas funções utilitárias.
