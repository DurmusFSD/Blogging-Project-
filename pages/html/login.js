export const Login = `

    <div class="grid md:grid-cols-3">
        <div class="border-r-8 border-blue-500 rounded"></div>
        <div class="p-4 flex flex-col gap-3">
        <h1 class="text-2xl font-bold text-white bg-blue-500 p-2">
           Üye girişi
        </h1>
        <form class="login-form flex flex-col gap-3">
           
            <div>
                <label for="email">Email</label>
                <br>
                <input type="email" class="border p-2 w-full ">
            </div>
            <div>
                <label for="password">Şifre</label>
                <br>
                <input type="password" class="border p-2 w-full ">
            </div>
            

            <button class="mt-2 bg-blue-500 p-2 w-full font-bold text-white">
                Kaydet
            </button>
        </form>
        </div>
        <div></div>
    </div>

`;