import React, { useMemo } from "react";

const LIST_SIZE = 2000;

type Props = {
  input: string;
};

const List: React.FC<Props> = ({ input }) => {
  const fullList = useMemo(() => {
    let list = [];
    for (let index = 0; index < LIST_SIZE; index++) {
      list.push(<div key={`item-${index}`}>{input}</div>);
    }

    return list;
  }, [input]);

  return <span>{fullList}</span>;
};

export default List;
