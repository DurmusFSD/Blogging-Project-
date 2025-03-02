export const Blogs = `

<div class="grid md:grid-cols-3 gap-3">
    <div>
        <h2 class="font-bold text-2xl mb-3">Yeni Blog Ekle</h2>
        <form class="blogs-form flex flex-col gap-3">
            <div class="flex flex-col gap-2">
                <label for="category" >Kategori Seç</label>
                <select class="form-select">
                    <option value="choose category">Kategoriler</option>
                </select>
            </div>
            <div class="flex flex-col gap-2">
                <label for="category" >Resim yükle</label>
                <input type="file" class="form-control">
            </div>
            <div class="flex flex-col gap-2">
                <label for="category" >Başlık</label>
               <input type="text" class="form-control">
            </div>
            <div class="flex flex-col gap-2">
                <label for="category" >Açıklama</label>
               <textarea class="form-control"></textarea>
            </div>
            <button type="submit" class="bg-blue-500 p-2 w-full text-white font-bold">
                Ekle
            </button>
            <button type="button" class="bg-rose-500 d-none p-2 w-full text-white font-bold">
                Güncelle
            </button>
        </form>
    </div>
    <div class="table-responsive grid md:col-span-2">
        
        <table class="table table-striped mt-6">
            <thead>
                <tr >
                    <th>No</th>
                    <th>Resim</th>
                    <th>Kategori</th>
                    <th>Başlık</th>
                    <th>Açıklama</th>
                    <th>Tarih</th>
                    <th>Düzenle</th>
                </tr>
            </thead>

            <tbody class="blogs-list">
                 <!-- <tr>
                    <td>1</td>
                    <td>
                      <img width="50" src="" alt=""/>
                      
                    </td>
                    <td>Education</td>
                    <td>Durmuş Özgül</td>
                    <td>Lorem, ipsum.</td>
                    <td>26/02/2025</td>
                    <td>
                      <button class="btn btn-primary rounded-dull">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-danger rounded-dull">
                        <i class="fa fa-trash"></i>
                      </button>
                  </td> 
                </tr>  -->
            </tbody>
        </table>
    </div>
</div>

`;
