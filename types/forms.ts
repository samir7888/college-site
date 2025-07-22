// Define types for forms and categories
export interface Form {
  id: string;
  name: string;
  description: string;
  fileSize: string;
  fileType: string;
  lastUpdated: string;
  downloadUrl: string;
  categoryId?: string;
  categoryName?: string;
}

export interface FormCategory {
  id: string;
  name: string;
  description: string;
  forms: Form[];
}

export interface FilteredForm extends Form {
  categoryId: string;
  categoryName: string;
}

export interface FilteredCategory extends FormCategory {
  forms: Form[];
}
