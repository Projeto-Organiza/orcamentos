'use client';

import React, { useState } from 'react';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import AlertList from '../components/AlertList';
import MetaEditor from '../components/MetaEditor';
import { FaExclamationTriangle } from 'react-icons/fa';

const Page: React.FC = () => {
  const [barData, setBarData] = useState([
    { name: 'Lazer', meta: 150, gasto: 350 },
    { name: 'Transporte', meta: 200, gasto: 450 },
    { name: 'Alimentação', meta: 300, gasto: 250 },
    { name: 'Educação', meta: 400, gasto: 350 },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState<{ name: string; meta: number; gasto: number }>({ name: '', meta: 0, gasto: 0 });

  const totalMeta = barData.reduce((acc, item) => acc + item.meta, 0);
  const totalGasto = barData.reduce((acc, item) => acc + item.gasto, 0);

  const alerts = barData
    .filter(item => item.gasto > item.meta)
    .map(item => `Seu orçamento para ${item.name} foi excedido.`);

  const handleSave = (newData: { name: string; meta: number; gasto: number }[]) => {
    setBarData(newData);
    setIsEditing(false);
    setNewItem({ name: '', meta: 0, gasto: 0 }); // Clear new item state
  };

  const handleAdd = () => {
    setIsEditing(true);
  };

  const handleNewItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: name === 'meta' || name === 'gasto' ? Number(value) : value
    }));
  };

  const handleNewItemSubmit = () => {
    if (newItem.name && newItem.meta >= 0 && newItem.gasto >= 0) {
      setBarData(prevData => [...prevData, newItem]);
      setIsEditing(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh', backgroundColor: '#ffffff' }}>
      <div style={{ width: '45%', padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1>Orçamento e Meta</h1>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '20px', backgroundColor: '#FAFAD2' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
            <FaExclamationTriangle style={{ color: '#FFA500', marginRight: '10px' }} />
            Alertas
          </h2>
          <AlertList alerts={alerts} />
        </div>
        <h2>Gráfico Comparativo</h2>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', backgroundColor: '#FAFAD2' }}>
          <BarChart data={barData} />
        </div>
      </div>

      <div style={{ width: '35%', padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Valor Total</h2>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '20px', height: '45%', backgroundColor: '#FAFAD2' }}>
          <PieChart totalMeta={totalMeta} totalGasto={totalGasto} />
        </div>

        <h2>Metas</h2>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', height: '55%', backgroundColor: '#FAFAD2' }}>
          <button onClick={handleAdd} style={{ marginBottom: '10px' }}>Adicionar</button>
          <MetaEditor
            barData={barData}
            onSave={handleSave}
          />
          {isEditing && (
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', backgroundColor: '#FAFAD2', marginTop: '10px' }}>
              <h3>Adicionar Novo Item</h3>
              <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleNewItemChange}
                placeholder="Nome"
                style={{ display: 'block', marginBottom: '10px', width: '100%' }}
              />
              <input
                type="number"
                name="meta"
                value={newItem.meta}
                onChange={handleNewItemChange}
                placeholder="Meta"
                style={{ display: 'block', marginBottom: '10px', width: '100%' }}
              />
              <input
                type="number"
                name="gasto"
                value={newItem.gasto}
                onChange={handleNewItemChange}
                placeholder="Gasto"
                style={{ display: 'block', marginBottom: '10px', width: '100%' }}
              />
              <button onClick={handleNewItemSubmit} style={{ marginTop: '10px' }}>Adicionar Item</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
