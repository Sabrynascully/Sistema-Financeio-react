import * as C from './App.styles';
import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  return (
<C.Container>
  <C.Header>
    <C.HeaderText>
      Sistema Financeiro
    </C.HeaderText>
    <C.Body>

    {/*Área de informações*/}
     {/*Área de inserção*/}
      {/*Área de informações*/}

    </C.Body>
    </C.Header>
  </C.Container>
  );
}
export default App;