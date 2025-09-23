import type { FC, ReactNode } from 'react';

import { ReduxProvider } from './providers/Redux-Provider';

interface EntryProps {
    children: ReactNode
}

export const Entry: FC<EntryProps> = ({ children }) => {
	return (
		<ReduxProvider>
			{children}
		</ReduxProvider>
	)
}