import React from 'react';


// Компонент фильтрации контактов
function Filter({ value, onChangeFilter }) {
  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChangeFilter} />
      </label>
    </form>
  );
}
export default Filter;