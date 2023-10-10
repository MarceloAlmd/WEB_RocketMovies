export function translation(message) {
  const messages = {
    "Email already Exists": "Este E-mail já está em uso",
    "Incorrect email or password": "Email ou Senha incorreto(s)",
    "incorrect current password": "Senha atual incorreta",
  };

  return messages[message];
}
