export const Category = `

<div class="grid md:grid-cols-2 gap-3">
    <div>
        <h2 class="font-bold text-2xl mb-3">Yeni Kategori Ekle</h2>
        <form class="cat-form flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label for="category" >Kategori</label>
                <input type="text" class="border p-2">
            </div>
            <button type="submit" class="bg-blue-500 p-2 w-full text-white font-bold">
                Ekle
            </button>
            <button type="button" class="bg-rose-500 d-none p-2 w-full text-white font-bold">
                Güncelle
            </button>
        </form>
    </div>
    <div class="table-responsive">
        <h2 class="font-bold text-2xl">Kategori Listesi</h2>
        <table class="table table-striped mt-4">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kategori</th>
                    <th>Tarih</th>
                    <th>Yönet</th>
                </tr>
            </thead>

            <tbody class="cat-list">
           
            </tbody>
        </table>
    </div>
</div>

`;
