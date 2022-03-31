import {reactive, ref} from "vue";
import {ElForm} from "element-plus";
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";
type FormInstance = InstanceType<typeof ElForm>


export function useLoginForm() {
    const { cookies } = useCookies();
    const router = useRouter()
    const authorization_form = reactive({
        name: '',
    });
    const authorization_form_ref = ref<FormInstance>();
    const authorization_form_rules = reactive({
        name: [
            { required: true, message: 'Пожалуйста, введите ваше имя', trigger: 'blur' },
            { min: 5, message: 'Минимум 5 символов', trigger: 'blur' },
        ],
    });
    const authorization_submit = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid) => {
            if (valid) {
                cookies.set("user_name", JSON.stringify(authorization_form.name), 31536000000);
                router.push({
                    name:'home',
                })
            }
        })
    };

    return  {
        authorization_form,
        authorization_form_ref,
        authorization_form_rules,
        authorization_submit,
    }
}