export function createFormData(formData, key, data) {
  if (data === Object(data) || Array.isArray(data)) {
    for (var i in data) {
      createFormData(formData, key + "[" + i + "]", data[i]);
    }
  } else {
    formData.append(key, data);
  }
}
