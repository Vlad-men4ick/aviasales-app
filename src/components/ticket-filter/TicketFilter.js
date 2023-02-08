import './TicketFilter.css';

function TicketFilter() {
  return (
    <div className="ticket-filter">
      <button type="button" className="cheapest">
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className="fastest">
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type="button" className="optional">
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default TicketFilter;
