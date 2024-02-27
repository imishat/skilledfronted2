import CustomSelect from "./CustomSelect";
import { FormError } from "./Error";
import FileInput from "./FileInput";
import { Input } from "./Input";
import { Label } from "./Label";
import { SelectInput } from "./Select";

export const FormElements = {
  Input: props => <Input {...props} />,
  Label: props => <Label {...props} />,
  Error: props => <FormError {...props} />,
  Select: props => <SelectInput {...props} />,
  FileInput: props => <FileInput {...props} />,
  SelectV2: props => <CustomSelect {...props} />,
};

export default FormElements;
