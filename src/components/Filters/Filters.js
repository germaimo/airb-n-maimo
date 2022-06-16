import React from 'react';
import FilterSelect from '../FilterSelect/FilterSelect';
import FilterDate from '../FilterDate/FilterDate';

const Filters = ({ filters, onFilterChange }) => {
  const handleDateChange = (event) => {
    //3) Handle change and call onFilterChange
    let payload = filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);

  };

  const handleSelectChange = (event) => {
    //3) Handle change and call onFilterChange
    let payload = filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
  };

  return (
    <nav className='navbar is-info' style={{ justifyContent: 'center' }}>
      <div className='navbar-item'>
        <FilterDate //4) Complete date
          date={filters.dateFrom}
          name='dateFrom'
          onDateChange={handleDateChange}
        />
      </div>
      <div className='navbar-item'>
        <FilterDate //4) Complete date
          date={filters.dateTo}
          name='dateTo'
          onDateChange={handleDateChange}
        />
      </div>
      <div className='navbar-item'>
        <FilterSelect
          options={[
            { value: 'select', name: 'Seleccione un Pais' },
            { value: 'Argentina', name: 'Argentina' },
            { value: 'Brasil', name: 'Brasil' },
            { value: 'Chile', name: 'Chile' },
            { value: 'Uruguay', name: 'Uruguay' },
          ]}
          name='country'
          selected={filters.country}
          onSelectChange={handleSelectChange}
        />
      </div>
      <div className='navbar-item'>
        <FilterSelect
          options={[
            { value: 'select', name: 'Seleccione un Precio' },
            { value: '1', name: '$' },
            { value: '2', name: '$$' },
            { value: '3', name: '$$$' },
            { value: '4', name: '$$$$' },
          ]}
          name='price'
          selected={filters.price}
          onSelectChange={handleSelectChange}
        />
      </div>
      <div className='navbar-item'>
        <FilterSelect
          options={[
            { value: 'select', name: 'Cualquier tamaño' },
            { value: '10', name: 'Hotel Pequeño' },
            { value: '20', name: 'Hotel Mediano' },
            { value: '30', name: 'Hotel Grande' },
          ]}
          name='rooms'
          selected={filters.rooms}
          onSelectChange={handleSelectChange}
        />
      </div>
    </nav>
  );
};

export default Filters;
