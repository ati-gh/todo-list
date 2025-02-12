export type ModalPropsTask = {
  open: boolean;
  setOpen: (arg: boolean) => void;
  inputRef?: React.RefObject<HTMLInputElement> | undefined;
  add?: () => void;
  textareaRef?: React.RefObject<HTMLInputElement> | undefined;
};
export type ToDoList = {
  id: string;
  task: string;
  description: string;
};
