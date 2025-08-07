import { Picker } from "@react-native-picker/picker";

const CustomDropdown = ({
  selectedItem,
  setSelectedItem,
  data,
}: CustomDropdownProps) => {
  return (
    <Picker
      selectedValue={selectedItem}
      style={{ height: 200, width: "100%" }}
      onValueChange={(itemValue) => setSelectedItem(itemValue)}
    >
      {data.map((item) => (
        <Picker.Item
          key={item.catgoryId}
          label={item.category}
          value={item.category}
        />
      ))}
    </Picker>
  );
};

export default CustomDropdown;
