import classes from './TicketFilter.module.scss';

function TicketFilter() {
  return (
    <div className={classes['ticket-filter']}>
      <button type="button" className={classes.cheapest}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={classes.fastest}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type="button" className={classes.optional}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default TicketFilter;
