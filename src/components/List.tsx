import React, { useMemo, useDeferredValue } from "react";

const LIST_SIZE = 2000;

type Props = {
  input: string;
};

const List: React.FC<Props> = ({ input }) => {
  const deferredInput = useDeferredValue(input);

  const fullList = useMemo(() => {
    let list = [];
    for (let index = 0; index < LIST_SIZE; index++) {
      list.push(<div key={`item-${index}`}>{deferredInput}</div>);
    }

    return list;
  }, [deferredInput]);

  return <span>{fullList}</span>;
};

export default List;
