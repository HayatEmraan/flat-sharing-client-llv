import React from "react";

import {
  useForm,
  FormProvider,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";

type TfsForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
  defaultValues?: Record<string, string>;
  resolver?: any;
};

const FsForm = ({ onSubmit, children, defaultValues, resolver }: TfsForm) => {
  const formConfig: any = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

  const submit = (data: FieldValues) => {
    methods.reset();
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form className="w-full" onSubmit={methods.handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FsForm;
