import { Controller, Control, FieldValues, Path, PathValue, FieldError } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextInput as NativeTextInput } from "react-native";

function TextInput<T extends FieldValues>({control, name, defaultValue, error, ...props}: TextInputProps<T>) {
	const style = [
		styles.input,
		error && styles.error
	];
  return (
		<Controller 
			control={control} 
			name={name} 
			defaultValue={defaultValue ?? "" as PathValue<T, Path<T>>} 
			render={(data) =>
				<NativeTextInput
						{...props}
						style={style}
						value={data.field.value}
						onChangeText={data.field.onChange} />
		} />
  )
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 2,
		padding: 20,
		borderColor: 'grey',
		borderRadius: 10
	},
	error: {
		borderColor: 'red'
	}
});

interface TextInputProps<T extends FieldValues> extends React.ComponentProps<typeof NativeTextInput> {
	control: Control<T>,
	name: Path<T>,
	defaultValue?: PathValue<T, Path<T>>
	error?: FieldError
};

export default TextInput