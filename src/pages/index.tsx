import { AuthContext } from "@/contexts/AuthContext";
import { Heading } from "@/shared/components/Heading";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { getSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import { useContext } from "react";
import { useForm } from 'react-hook-form'

function Home() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await signIn(data)
  }

  return (
    <section className="bg-shape2 flex items-center justify-center h-screen w-screen p-4">
      <motion.div
        initial={{ x: '13%' }}
        animate={{ x: '0' }}
        className="w-[50%] max-h-[56.25rem] py-10 px-0 md:p-12">
        <header className="flex flex-col items-center">
          <Image
            // className="animate-[gengar_2s_ease-in-out_infinite] drop-shadow-[0_0_1rem_rgb(36,15,70)] mx-auto w-auto h-auto"
            width={220}
            height={220}
            src="/assets/2.png"
            alt="gengar"
          />

          <Heading size="lg" className="mt-4">
            Gengar Control Money
          </Heading>

          <h2 className="text-gray-400 mt-1">Faça login e comece a usar!</h2>
        </header>

        <form className="flex flex-col mt-10 my-0 mx-auto max-w-sm w-full gap-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-100 ">Seu email</label>

            <input
              {...register('email')}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 text-gray-100"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col gap-2">

            <label className="font-semibold text-gray-100 ">Sua senha</label>

            <input
              {...register('password')}
              name="password"
              type="password"
              autoComplete="email"
              required
              className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 text-gray-100"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 ">
            <button
              // type="submit"
              // onChange={e => handleLogin}

              className="justify-center items-center text-base text-center text-white py-3 px-4 bg-roxo rounded font-semibold text-sm  transition-colors hover:bg-roxo2 focus:ring-2 ring-white">
              Entrar
            </button>
          </div>
          <div className="pt-8">
            <p className="font-normal text-sm text-gray-100 ">
              Ainda não tem uma conta?{' '}
            </p>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ x: '-13%' }}
        animate={{ x: '0' }}
        className="HeaderColor  w-[50%] h-full py-10 px-0 rounded"
      />
    </section>
  )
}

export default Home
