import React, { useState } from "react";

type MyFormProps = {
    onSubmit: (form: { name: string, description: string}) => void;
}

const MyForm = ({ onSubmit }: MyFormProps) => {
    // onSubmit을 props로 받아야한다.
    // props로 받은 onSubmit의 type은 MyFormProps
    const [ form, setForm ] = useState({
        name: "",
        description: ""
    });

    const { name, description } = form;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // onChange에 마우스를 올려놓으면 ts가 알려준다.
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: "",
            description:""
        }); // 초기화
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange}/>
            <input name="description" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;