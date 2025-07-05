// authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

//************************************************************************
//* Criando os tipos para o estado de autenticação
//************************************************************************
type UserData = {
  name: string;
  jwt: string;
}

type UserLogin = {
  email: string;
  senha: string;
}

type AuthState = {
  user: UserData | null;
  error: boolean;
  success: boolean;
  loading: boolean;
  message: string;
}

//************************************************************************
//* Declarando o estado inicial do slice de autenticação
//************************************************************************
const initialState: AuthState = {
  user: null,
  error: false,
  success: false,
  loading: false,
  message: ''
}

//************************************************************************
//* Criando Thunks para o slice de autenticação
// Thunks podem ser adicionados aqui, se precisar de operações assíncronas, 
// por exemplo, chamadas de API. Cada thunk pode gerenciar seus próprios 
// estados de carregamento, sucesso e erro nos extraReducers abaixo.
//************************************************************************

export const loginUser = createAsyncThunk<
  UserData,                         // retorno se sucesso
  UserLogin, // parâmetro da função
  { rejectValue: string }           // tipo do valor passado para rejectWithValue
>(
  'auth/loginUser', // nome da ação, pode ser qualquer string, só não pode ser repetida entre Thunks
  async (params, { rejectWithValue }) => { //não precisa tipar params, pois foi tipado na definição do thunk
    await new Promise(resolve => setTimeout(resolve, 2000))

    const { email, senha } = params

    if (email === 'admin@admin.com' && senha === '123123') {
      return { name: 'Admin', jwt: 'token123' }
    } else {
      return rejectWithValue('Credenciais inválidas')
    }
  }
)

//************************************************************************
//* Criando o slice de autenticação
//************************************************************************
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { //melhor usados para ações síncronas e simples, como esse reset que limpa o estado
    reset: (state) => {
      state.user = null
      state.error = false
      state.success = false
      state.loading = false
      state.message = ''
    },
  },
  extraReducers: (builder) => { //melhor usados para ações assíncronas, como o loginUsers
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = false
        state.success = false
        state.message = ''
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.user = action.payload
        state.message = 'Login bem-sucedido!'
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.success = false
        state.message = action.payload || 'Erro ao fazer login'
      })
  }
})

export const { reset } = authSlice.actions;

const authReducer = authSlice.reducer
export default authReducer;

