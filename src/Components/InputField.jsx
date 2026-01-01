export const InputField = ({ type, placeholder, value, onChange }) => {
    return (
        <div className="">
            <input style={{ width: "100%" }} className="border border-white/10 px-4 py-2  rounded-md outline-0 focus:border-primary focus:border-2 text-white/80 bg-card"
                type={type} placeholder=
                {placeholder} value={value} onChange={onChange} required />
        </div>
    )
}