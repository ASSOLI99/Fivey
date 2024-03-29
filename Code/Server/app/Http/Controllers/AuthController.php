<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'=>['required','min:3'],
            'userName'=>['required','min:3',Rule::unique('users','userName')],
            'email'=>['required','regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/', Rule::unique('users','email')],
            'password'=>'required|confirmed|min:8|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-.]).{8,}$/'
        ]);
        $user=User::create([
            'name'=>$request->input('name'),
            'userName'=>$request->input('userName'),
            'email'=>$request->input('email'),
            'password'=>Hash::make( $request->input('password'))
        ]);
        return $user;
    }

    public function login(Request $request){
        $request->validate([
            'email'=>['required','email'],
            'password'=>'required'
        ]);
        if(!Auth::attempt($request->only('email','password'))){
            return response(['message'=>'Invalid credentials'],Response::HTTP_UNAUTHORIZED);
        };
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        return response([
            'token'=>$token
        ]);
    }
        public function user(){
        return Auth::user();
    }
    public function allUsers(){
       $category = User::select('id', 'name', 'role','email', 'image')->orderByDesc('name')->paginate(10);
        return response($category, 200);
    }
    public function store(Request $request){
        // return response("done");

        $request->validate([
            'name'=>['required','min:3'],
            'userName'=>['required','min:3',Rule::unique('users','userName')],
            'email'=>['required','regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/', Rule::unique('users','email')],
            'password'=>'required|min:8|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-.]).{8,}$/',
            'role'=>'required',Rule::in(['1', '2']),
            'image' => 'required|max:5048|mimes:jpeg,jpg,png',
        ]);

        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }
        // return response("done");

        $user = new User();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . random_int(1, 99) . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('/img/user/');
            $image->move($destinationPath, $filename);
            $user->image = $filename;
        }
        $user->name = $request->input('name');
        $user->userName = $request->input('userName');
        $user->email = $request->input('email');
        $user->role = $request->input('role');
        // return response("done");

        $user->password =Hash::make( $request->input('password'));
        $user->save();
        return response($user, 201);
    }
public function showOneCourses($id){
             $courses = DB::table('courses')->where('user_id','=',$id)->paginate(10);
        return response($courses, 200);
}
 public function showOne($id)
    {

        $user = User::where('id', $id)->get();
        return response($user);
    }
    public function show($id)
    {
        $user = User::where('id', $id)->get();
        return response($user);
    }
        public function update(Request $request, $id)
    {
        //   return  response($request->file('image'));

        $request->validate([
            'name'=>['required','min:3'],
            'description'=>['nullable','min:25'],
            'role'=>'required',Rule::in(['1', '2']),
            'field'=>'nullable',
            'phone'=>'nullable|min:6',
            'youtube'=>'nullable|url',
            'linkedin'=>'nullable|url',
            'facebook'=>'nullable|url',
            'image' => 'nullable|max:5048|mimes:jpeg,jpg,png',
        ]);
        $user = User::find($id);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . random_int(1, 99) . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('/img/user/');
            $image->move($destinationPath, $filename);
            $user->image = $filename;
        }
        $user->name = $request->name;
        $user->description = $request->description;
        $user->role = $request->role;
        $user->field = $request->field;
        $user->phone = $request->phone;
        $user->youtube = $request->youtube;
        $user->linkedin = $request->linkedin;
        $user->facebook = $request->facebook;
        $user->update();
        return response($user, 201);
    }
    public function destroy($id)
    {
        return User::where('id', '=', $id)->delete();
    }
}
