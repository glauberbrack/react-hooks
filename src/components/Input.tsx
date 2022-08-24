import React, { useImperativeHandle } from "react";

interface Props {}

const Input = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
    // Using this hook, we can access all the properties of the ref and change it.
    useImperativeHandle(
      ref,
      () =>
        ({
          focus: () => {
            console.log("change focus");
          },
        } as HTMLInputElement)
    );

    return <input id="input-focus" type="text" ref={ref} {...props} />;
  }
);

export default Input;
