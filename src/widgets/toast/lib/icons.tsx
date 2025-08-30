import { MdCheckCircle, MdError, MdInfo, MdWarning } from 'react-icons/md'
import type { ToastType } from '../types'
import type { JSX } from 'react'

export const TOAST_ICON: Record<ToastType, JSX.Element> = {
    success: <MdCheckCircle />,
    error: <MdError />,
    info: <MdInfo />,
    warning: <MdWarning />,
}
