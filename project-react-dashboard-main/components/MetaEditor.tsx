import React, { useState, useEffect } from 'react';

interface MetaTableProps {
  barData: { name: string; meta: number; gasto: number }[];
  onSave: (newData: { name: string; meta: number; gasto: number }[]) => void;
}

const MetaTable: React.FC<MetaTableProps> = ({ barData, onSave }) => {
  const [data, setData] = useState(barData);
  const [editingItem, setEditingItem] = useState<string | null>(null);

  useEffect(() => {
    setData(barData);
  }, [barData]);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, name: string) => {
    setData(prevData =>
      prevData.map(item =>
        item.name === name ? { ...item, [field]: field === 'name' ? e.target.value : Number(e.target.value) } : item
      )
    );
  };

  const handleSave = (name: string) => {
    setEditingItem(null);
    onSave(data);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const handleEdit = (name: string) => {
    setEditingItem(name);
  };

  const handleDelete = (name: string) => {
    const updatedData = data.filter(item => item.name !== name);
    setData(updatedData);
    onSave(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Meta</th>
            <th>Gasto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.name}>
              <td>
                {editingItem === item.name ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleEditChange(e, 'name', item.name)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingItem === item.name ? (
                  <input
                    type="number"
                    value={item.meta}
                    onChange={(e) => handleEditChange(e, 'meta', item.name)}
                  />
                ) : (
                  item.meta
                )}
              </td>
              <td>
                {editingItem === item.name ? (
                  <input
                    type="number"
                    value={item.gasto}
                    onChange={(e) => handleEditChange(e, 'gasto', item.name)}
                  />
                ) : (
                  item.gasto
                )}
              </td>
              <td>
                {editingItem === item.name ? (
                  <>
                    <button onClick={() => handleSave(item.name)} aria-label="Salvar alterações">Salvar</button>
                    <button onClick={handleCancel} aria-label="Cancelar edição">Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(item.name)} aria-label="Editar item">Editar</button>
                    <button onClick={() => handleDelete(item.name)} aria-label="Excluir item">Excluir</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetaTable;
