interface FormsProps {
  formElements: {
    name: string;
    form: string;
  }[];
};

const Forms = ({ formElements }: FormsProps) => {
  return(
    <dd className="space-y-8 text-lg leading-8 mt-12">
      <ul className="-mx-4 !mt-6 bg-slate-50 px-4 py-6 sm:mx-0 sm:rounded-3xl sm:px-8">
        {formElements.map(el => (
          <li>
            <a href={`/forms/${el.form}.pdf`} className="group flex justify-between py-2">
              <div className="font-semibold text-slate-900 group-hover:text-red-500">
                {`${el.name} (PDF)`}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </dd>
  );
};

export default Forms;
