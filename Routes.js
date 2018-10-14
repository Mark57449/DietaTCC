import React from 'react';
import {Routes, Scene} from 'react-native-router-flux';

import Inicio from './src/components/Inicio.js'; 
import Alimentos from './src/components/Alimentos.js';
import StatusB from './src/components/StatusB.js';

export default props => (
	<Router>
		<Scene key='Inicio' component={Inicio} title="Tela Principal" />
		<Scene key='Alimentos' component={Alimentos} title="Sobre os Alimentos" />
		<Scene key='StatusB' component={StatusB} title="Barra de Notificacoes" />
	</Router>
);