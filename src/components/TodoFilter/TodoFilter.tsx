import React from 'react';

type Props = {
  query: string,
  status: string,
  onChangeQuery: (query: string) => void,
  onChangeStatus: (status: string) => void,
};

export const TodoFilter: React.FC<Props> = ({
  query,
  status,
  onChangeQuery,
  onChangeStatus,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          value={status}
          onChange={(event) => onChangeStatus(event.target.value)}
          data-cy="statusSelect"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(event) => onChangeQuery(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => onChangeQuery('')}
          />
        </span>
      )}
    </p>
  </form>
);